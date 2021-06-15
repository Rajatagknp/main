import { Component } from "@angular/core";

@Component({
    selector: "firstpage",
    styleUrls: ["page.style.scss"],
    template: `
        <div class="page_footer">
            <a routerLink="/remotestate/leave"><button type="button" class="leave_page_button">Leave Form</button></a>
            <a routerLink="/remotestate/leave/second_page"><button type="button" class="next_button">Next</button></a>
        </div>
    `
})

export class firstpagecomponent {}