import { Component } from "@angular/core";

@Component({
    selector: "app-dialog",
    templateUrl: "./dialog.component.html"
})
export class DialogComponent {

    isOpenModal = false;

    toggleModal() {
        console.log('click')
        this.isOpenModal = !this.isOpenModal;
    }
}