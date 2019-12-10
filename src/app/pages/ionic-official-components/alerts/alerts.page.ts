import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-alerts",
  templateUrl: "./alerts.page.html",
  styleUrls: ["./alerts.page.scss"]
})
export class AlertsPage implements OnInit {
  testRadioOpen: boolean;
  testRadioResult: any;

  testCheckboxOpen: boolean;
  testCheckboxResult: any;

  constructor(public alertCtrl: AlertController) {}

  ngOnInit() {}

  doAlert() {
    this.alertCtrl
      .create({
        header: "New Friend!",
        subHeader:
          "Your friend, Obi wan Kenobi, just accepted your friend request!",
        buttons: ["Ok"]
      })
      .then(alert => alert.present());
  }

  doConfirm() {
    this.alertCtrl
      .create({
        header: "Use this lightsaber?",
        message:
          "Do you agree to use this lightsaber to do good across the intergalactic galaxy?",
        buttons: [
          {
            text: "Disagree",
            handler: () => {
              console.log("Disagree clicked");
            }
          },
          {
            text: "Agree",
            handler: () => {
              console.log("Agree clicked");
            }
          }
        ]
      })
      .then(alert => alert.present());
  }

  doPrompt() {
    this.alertCtrl
      .create({
        header: "Login",
        message: "Enter a name for this new album you're so keen on adding",
        inputs: [
          {
            name: "title",
            placeholder: "Title"
          }
        ],
        buttons: [
          {
            text: "Cancel",
            handler: (data: any) => {
              console.log("Cancel clicked");
            }
          },
          {
            text: "Save",
            handler: (data: any) => {
              console.log("Saved clicked", data);
            }
          }
        ]
      })
      .then(alert => alert.present());
  }

  doRadio() {
    this.alertCtrl
      .create({
        header: "Lightsaber color",
        inputs: [
          {
            type: "radio",
            label: "Blue",
            value: "blue",
            checked: true
          },
          {
            type: "radio",
            label: "Green",
            value: "green"
          },
          {
            type: "radio",
            label: "Red",
            value: "red"
          },
          {
            type: "radio",
            label: "Yellow",
            value: "yellow"
          },
          {
            type: "radio",
            label: "Purple",
            value: "purple"
          },
          {
            type: "radio",
            label: "White",
            value: "white"
          },
          {
            type: "radio",
            label: "Black",
            value: "black"
          }
        ],
        buttons: [
          "Cancel",
          {
            text: "Ok",
            handler: (data: any) => {
              console.log("Radio data:", data);
              this.testRadioOpen = false;
              this.testRadioResult = data;
            }
          }
        ]
      })
      .then(alert => alert.present());
  }

  doCheckbox() {
    this.alertCtrl
      .create({
        header: "Which planets have you visited?",
        inputs: [
          {
            type: "checkbox",
            label: "Alderaan",
            value: "value1",
            checked: true
          },

          {
            type: "checkbox",
            label: "Bespin",
            value: "value2"
          },

          {
            type: "checkbox",
            label: "Coruscant",
            value: "value3"
          },

          {
            type: "checkbox",
            label: "Endor",
            value: "value4"
          },

          {
            type: "checkbox",
            label: "Hoth",
            value: "value5"
          },

          {
            type: "checkbox",
            label: "Jakku",
            value: "value6"
          },

          {
            type: "checkbox",
            label: "Naboo",
            value: "value6"
          },

          {
            type: "checkbox",
            label: "Takodana",
            value: "value6"
          },

          {
            type: "checkbox",
            label: "Tatooine",
            value: "value6"
          }
        ],
        buttons: [
          "Cancel",
          {
            text: "Okay",
            handler: (data: any) => {
              console.log("Checkbox data:", data);
              this.testCheckboxOpen = false;
              this.testCheckboxResult = data;
            }
          }
        ]
      })
      .then(alert => alert.present());
  }
}
