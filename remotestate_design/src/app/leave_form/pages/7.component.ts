import { Component } from "@angular/core";

@Component({
    selector: "sevenpage",
    styleUrls: ["page.style.scss"],
    template: `
        <div class="page_footer">
            <a routerLink="/remotestate/leave/six_page"><button type="button" class="back_button">Back</button></a>
            <a routerLink="/remotestate/leave"><button type="button" class="leave_page_button">Leave Form</button></a>
            <a routerLink="/remotestate/leave/eigth_page"><button type="button" class="next_button">Next</button></a>
        </div>
        <div class="seven_page">
            <div class="number_page_header">
                <div class="back_arrow"></div>
                <div class="leave_app">Leave Application</div>
                <div class="bell_icon"></div>
                <div class="exit_page_icon"></div>
            </div>
            <div class="page_body">
                <div class="body_one">
                    <div class="body_logo"></div>
                    <div class="body_text">Sick Leave</div>
                    <div class="body_number">3/7</div>
                </div>
                <div class="body_two">
                    <div class="body_logo"></div>
                    <div class="body_text">Casual Leave</div>
                    <div class="body_number">6/5</div>
                </div>
                <div class="body_three">
                    <div class="body_logo"></div>
                    <div class="body_text">Annual Leave</div>
                    <div class="body_number">13/21</div>
                </div>
            </div>
            <div class="apply_leave">Apply Leave</div>
            <div class="leave_his">Recent Leave History</div>
            <div class="leave_table_one">
                <div class="table_header">
                    <div class="table_logo_one"></div>
                    <div class="table_date_one">12 April 2021</div>
                    <div class="to">To</div>
                    <div class="table_logo_two"></div>
                    <div class="table_date_two">14 April 2021</div>
                    <div class="edit_logo"></div>
                </div>
                <div class="table_body">Reason</div>
            </div>
            <div class="leave_table_two">
                <div class="table_header">
                    <div class="table_logo_one"></div>
                    <div class="table_date_one">12 April 2021</div>
                    <div class="to">To</div>
                    <div class="table_logo_two"></div>
                    <div class="table_date_two">14 April 2021</div>
                    <div class="edit_logo"></div>
                </div>
                <div class="table_body">Reason</div>
            </div>
            <div class="edit_leave">
                <div class="close_icon"></div>
                <div class="modify"></div>
                <div class="cancle"></div>
                <div class="remove"></div>
            </div>
        </div>
    `
})

export class sevenpagecomponent {}