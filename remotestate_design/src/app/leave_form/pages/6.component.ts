import { Component } from "@angular/core";

@Component({
    selector: "sixpage",
    styleUrls: ["page.style.scss"],
    template: `
        <div class="page_footer">
            <a routerLink="/remotestate/leave/fifth_page"><button type="button" class="back_button">Back</button></a>
            <a routerLink="/remotestate/leave"><button type="button" class="leave_page_button">Leave Form</button></a>
            <a routerLink="/remotestate/leave/seven_page"><button type="button" class="next_button">Next</button></a>
        </div>
        <div class="six_page">
            <div class="number_page_header">
                <div class="back_arrow"></div>
                <div class="leave_app">Leave Application</div>
                <div class="bell_icon"></div>
                <div class="exit_page_icon"></div>
            </div>
            <div class="text">
                <div class="form_date">From Date :</div>
                <div class="to_date">To Date :</div>
                <div class="leave_type">Leave type :</div>
                <div class="total_day">Total Days :</div>
                <div class="reason">Reason :</div>
            </div>
            <div class="table">
                <div class="form_date_table">
                    <p class="p">12 April 2021</p>
                    <div class="logo"></div>
                </div>
                <div class="to_date_table">
                    <p class="p">14 April 2021</p>
                    <div class="logo"></div>
                </div>
                <div class="leave_type_table">
                    <p class="p">Select</p>
                    <div class="logo"></div>
                </div>
                <div class="total_day_table">
                    <p class="p">2</p>
                </div>
                <div class="reason_table">
                    <p class="p">Going to marriage function</p>
                </div>
            </div>
            <button type="button" class="submit_button">Submit</button>
        </div>
    `
})

export class sixpagecomponent {}