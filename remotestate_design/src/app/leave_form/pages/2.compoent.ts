import { Component } from "@angular/core";

@Component({
    selector: "secondpage",
    styleUrls: ["page.style.scss"],
    template: `
        <div class="page_footer">
            <a routerLink="/remotestate/leave/first_page"><button type="button" class="back_button">Back</button></a>
            <a routerLink="/remotestate/leave"><button type="button" class="leave_page_button">Leave Form</button></a>
            <a routerLink="/remotestate/leave/third_page"><button type="button" class="next_button">Next</button></a>
        </div>
        <div class="second_page">
            <div class="remotestate">RemoteState</div>
        </div>
    `
})

export class secondpagecomponent {}