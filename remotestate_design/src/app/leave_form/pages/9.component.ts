import { Component } from "@angular/core";

@Component({
    selector: "ninepage",
    styleUrls: ["page.style.scss"],
    template: `
        <div class="page_footer">
            <a routerLink="/remotestate/leave/eigth_page"><button type="button" class="back_button">Back</button></a>
            <a routerLink="/remotestate/leave"><button type="button" class="leave_page_button">Leave Form</button></a>
            <a routerLink="/remotestate/leave/ten_page"><button type="button" class="next_button">Next</button></a>
        </div>
        <div class="nine_page">
            <div class="number_page_header">
                <div class="back_arrow"></div>
                <div class="leave_app">Leave Application</div>
                <div class="bell_icon"></div>
                <div class="exit_page_icon"></div>
            </div>
            <div class="page_body">
                <div class="complete_logo"></div>
                <div class="body_body">
                    <div class="text">
                        Your leave Application has <br> been submitted <br> successfully
                    </div>
                    <button type="button" class="continue">Continue</button>
                </div>
            </div>
        </div>
    `
})

export class ninepagecomponent {}