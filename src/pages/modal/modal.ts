import { Component, Renderer, ViewContainerRef, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef } from '@angular/core';
import { AlertController, Events, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AppInjector } from '../../app/app-injecter';
import { GlobalVars } from '../../app/global';
import * as $ from "jquery";
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor( private viewContainerRef: ViewContainerRef,
    public navCtrl: NavController,
     public navParams: NavParams, public renderer: Renderer,
      public view: ViewController, public resolver: ComponentFactoryResolver,
       public injecter: Injector, public appRef: ApplicationRef, public events: Events, public alertCtrl: AlertController) {
    this.renderer.setElementClass(view.pageRef().nativeElement, 'my-popup', true);
    this.dataPop = this.navParams.get('data');
  }
  public myGlobal = AppInjector.get(GlobalVars);
  public dataPop: any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    this.events.unsubscribe("NitCloseModal");
    this.events.subscribe('NitCloseModal', () => {
      this.closeModal();
    });
  }
  closeModal() {
    this.myGlobal.global_SmartAudio.play('click_sound');
    setTimeout(() => {
      this.navCtrl.pop();
    }, 300);

  }
  ngOnInit(){
    $(".rp-pop_close").css("pointer-events", "none");
    setTimeout(() => {
      $(".rp-pop_close").css("pointer-events", "visible");
    }, 500);
    if (this.dataPop["isSecondPop"] == true) {
      $(".second_popup page-modal .rp-modal_wrapper").prepend(this.renderComponent(this.dataPop));
    } else {
      $("page-modal .rp-modal_wrapper").prepend(this.renderComponent(this.dataPop));
    }
  }
  renderComponent(obj) {
    this.viewContainerRef.clear();
    let componentRef = this.viewContainerRef.createComponent(
      this.resolver.resolveComponentFactory((obj.factory))
      );
    componentRef.instance["homeRef"] = obj.home;
    componentRef.instance["modalRef"] = this;
    componentRef.instance["arrParam"] = obj.params;
    componentRef.instance["rpFactories"] = obj.factory;
    return (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0];
  }
}
