import { Component } from "@angular/core";

@Component({
    selector: "thirteenpage",
    styleUrls: ["page.style.scss"],
    template: `
        <div class="page_footer">
            <a routerLink="/remotestate/leave/twelve_page"><button type="button" class="back_button">Back</button></a>
            <a routerLink="/remotestate/leave"><button type="button" class="leave_page_button">Leave Form</button></a>
            <a routerLink="/remotestate/leave/fourteen_page"><button type="button" class="next_button">Next</button></a>
        </div>
        <div class="thirteen_page">
            <div class="number_page_header">
                <div class="back_arrow"></div>
                <div class="leave_app">Standup</div>
                <div class="bell_icon"></div>
                <div class="exit_page_icon"></div>
            </div>
            <div class="did_one">
                What I Did Yesterday ?
            </div>
            <div class="did_two">
                What I Will Do Today ?
            </div>
            <div class="box_one">
                <p class="para">Made some changes in corona case app as directed</p>
            </div>
            <div class="box_two">
                <p class="para">Go through material UI and will do as directed</p>
            </div>
            <button type="button" class="submit_button">Save Changes</button>
            <div class="box_three">
                <div class="his_icon"></div>
                <div class="pre_sta">Previous Standup</div>
                <div class="cel_icon"></div>
            </div>
        </div>
    `
})

export class thirteenpagecomponent {}