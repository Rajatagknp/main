import { Component } from "@angular/core";

@Component({
    selector: "elevenpage",
    styleUrls: ["page.style.scss"],
    template: `
        <div class="page_footer">
            <a routerLink="/remotestate/leave/ten_page"><button type="button" class="back_button">Back</button></a>
            <a routerLink="/remotestate/leave"><button type="button" class="leave_page_button">Leave Form</button></a>
            <a routerLink="/remotestate/leave/twelve_page"><button type="button" class="next_button">Next</button></a>
        </div>
        <div class="eleven_page">
            <div class="number_page_header">
                <div class="back_arrow"></div>
                <div class="leave_app">Previous Standups</div>
                <div class="bell_icon"></div>
                <div class="exit_page_icon"></div>
            </div>
            <div class="header">
                <div class="last_five">Last five Standups</div>
                <div class="header_logo"></div>
            </div>
            <div class="his_one">
                <div class="his_header">
                    <div class="his_header_cel"></div>
                    <div class="his_date">05/May/2021</div>
                    <div class="his_edit"></div>
                </div>
                <div class="his_body">
                    <div class="his_hor_one"></div>
                    <div class="did_yes">What I did yesterday?</div>
                    <div class="black_dot"></div>
                    <div class="body_text">
                        Made some changes in corona case app as directed
                    </div>
                    <div class="his_hor_two"></div>
                    <div class="did_tod">What will I do today?</div>
                </div>
                <div class="his_show_more">Show...</div>
            </div>
            <div class="his_two">
                <div class="his_header">
                    <div class="his_header_cel"></div>
                    <div class="his_date">05/May/2021</div>
                    <div class="his_edit"></div>
                </div>
                <div class="his_body">
                    <div class="his_hor_one"></div>
                    <div class="did_yes">What I did yesterday?</div>
                    <div class="body_text">
                        Made some changes in corona case app as directed
                    </div>
                    <div class="black_dot"></div>
                    <div class="his_hor_two"></div>
                    <div class="did_tod">What will I do today?</div>
                </div>
                <div class="his_show_more">Show...</div>
            </div>
            <div class="his_three">
                <div class="his_header">
                    <div class="his_header_cel"></div>
                    <div class="his_date">05/May/2021</div>
                    <div class="his_edit"></div>
                </div>
                <div class="his_body">
                    <div class="his_hor_one"></div>
                    <div class="did_yes">What I did yesterday?</div>
                    <div class="body_text">
                        Made some changes in corona case app as directed
                    </div>
                    <div class="black_dot"></div>
                    <div class="his_hor_two"></div>
                    <div class="did_tod">What will I do today?</div>
                </div>
                <div class="his_show_more">Show...</div>
            </div>
            <div class="his_four">
                <div class="his_header">
                    <div class="his_header_cel"></div>
                    <div class="his_date">05/May/2021</div>
                    <div class="his_edit"></div>
                </div>
                <div class="black_dot"></div>
                <div class="his_body">
                    <div class="his_hor_one"></div>
                    <div class="did_yes">What I did yesterday?</div>
                    <div class="body_text">
                        Made some changes in corona case app as directed
                    </div>
                    <div class="his_hor_two"></div>
                    <div class="did_tod">What will I do today?</div>
                </div>
                <div class="his_show_more">Show...</div>
            </div>
            <div class="his_five">
                <div class="his_header">
                    <div class="his_header_cel"></div>
                    <div class="his_date">05/May/2021</div>
                    <div class="his_edit"></div>
                </div>
                <div class="black_dot"></div>
                <div class="his_body">
                    <div class="his_hor_one"></div>
                    <div class="did_yes">What I did yesterday?</div>
                    <div class="body_text">
                        Made some changes in corona case app as directed
                    </div>
                    <div class="his_hor_two"></div>
                    <div class="did_tod">What will I do today?</div>
                </div>
                <div class="his_show_more">Show...</div>
            </div>
        </div>
    `
})

export class elevenpagecomponent {}