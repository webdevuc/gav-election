import Swal from 'sweetalert2';
import { Platform } from '@angular/cdk/platform';
import { filter, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    modalVersion: boolean;
    modalPwaEvent: any;
    modalPwaPlatform: string | undefined;
    /**
     * Constructor
     */
    constructor(private swUpdate: SwUpdate, private platform: Platform) {
        this.modalVersion = false;
    }

    public ngOnInit(): void {

        if (this.swUpdate.isEnabled) {
            this.swUpdate.versionUpdates.pipe(
                filter((evt: any): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
                map((evt: any) => {
                    console.info(`currentVersion=[${evt.currentVersion} | latestVersion=[${evt.latestVersion}]`);
                    this.modalVersion = true;
                }),
            );
        }

        this.loadModalPwa();
    }




    // private loadModalPwa(): void {
    //     console.log('this.platform', this.platform);

    //     if (this.platform.IOS && this.platform.SAFARI) {
    //         const isInStandaloneMode = ('standalone' in window.navigator) && ((<any>window.navigator)['standalone']);
    //         if (!isInStandaloneMode) {
    //             this.modalPwaPlatform = 'IOS';
    //             this.promptMessageIOS();
    //         }
    //     } else {
    //         console.log('this is else', this.platform);

    //         window.addEventListener('beforeinstallprompt', (event: any) => {
    //             console.log('this is event', event);
    //             console.log('this is else', this.platform);
    //             event.preventDefault();
    //             this.modalPwaEvent = event;
    //             this.modalPwaPlatform = this.getPlatform()
    //             this.promptMessage();
    //         });
    //     }
    // }

    private loadModalPwa(): void {
        if (this.platform.ANDROID) {
            window.addEventListener('beforeinstallprompt', (event: any) => {
                event.preventDefault();
                this.modalPwaEvent = event;
                this.modalPwaPlatform = 'ANDROID';
                this.promptMessage();
            });
        }

        if (this.platform.IOS && this.platform.SAFARI) {
            const isInStandaloneMode = ('standalone' in window.navigator) && ((<any>window.navigator)['standalone']);
            if (!isInStandaloneMode) {
                this.modalPwaPlatform = 'IOS';
            }
        }

        if (this.platform.isBrowser) {
            window.addEventListener('beforeinstallprompt', (event: any) => {
                event.preventDefault();
                this.modalPwaEvent = event;
                this.modalPwaPlatform = 'BROWSER';
                this.promptMessage();
            });
        }
    }

    public addToHomeScreen(): void {
        this.modalPwaEvent.prompt();
        this.modalPwaPlatform = undefined;
    }

    public closePwa(): void {
        this.modalPwaPlatform = undefined;
    }

    public closeVersion(): void {
        this.modalVersion = false;
    }

    public updateVersion(): void {
        this.modalVersion = false;
        window.location.reload();
    }

    promptMessage() {
        console.log('this is promptMessage', this.platform);
        Swal.fire({
            title: 'हे WEB APP होम स्क्रीनवर जोडा',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'जोडा',
            denyButtonText: `गरज नाही`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                this.addToHomeScreen();
            } else if (result.isDenied) {
                Swal.fire('धन्यवाद', '', 'success')
            }
        })
    }
    promptMessageIOS() {
        Swal.fire({
            title: 'Install this WEB app on your device',
            html: 'To install this WEB app on your device, tap the "Menu" button' +
                '<img  width="20px" height="20px" src="https://res.cloudinary.com/rodrigokamada/image/upload/v1641089482/Blog/angular-pwa/safari_action_button_38x50.png"' +
                'class= "ios-menu m-0" />' +
                'and then "Add to home screen" button' + ' < />',
            showDenyButton: false,
            showCancelButton: true,
        })
    }
    promptMessageUpdate() {
        Swal.fire({
            title: 'या अॅपची नवीन आवृत्ती उपलब्ध आहे.',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'अपडेट करा',
            denyButtonText: `अपडेट करू नका`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                this.updateVersion();
            } else if (result.isDenied) {
                this.closeVersion();
            }
        })
    }

    getPlatform() {
        if (this.platform.ANDROID) {

            return 'ANDROID';

        } else if (this.platform.isBrowser) {
            return 'BROWSER';

        } else {
            return 'OTHER'
        }
    }


}
