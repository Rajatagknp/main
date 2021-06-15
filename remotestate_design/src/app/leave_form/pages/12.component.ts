import { Component } from "@angular/core";

@Component({
    selector: "twelvepage",
    styleUrls: ["page.style.scss"],
    template: `
        <div class="page_footer">
            <a routerLink="/remotestate/leave/eleven_page"><button type="button" class="back_button">Back</button></a>
            <a routerLink="/remotestate/leave"><button type="button" class="leave_page_button">Leave Form</button></a>
            <a routerLink="/remotestate/leave/thirteen_page"><button type="button" class="next_button">Next</button></a>
        </div>
        <div class="twelve_page">
            <div class="number_page_header">
                <div class="back_arrow"></div>
                <div class="leave_app">Holidays</div>
                <div class="bell_icon"></div>
                <div class="exit_page_icon"></div>
            </div>
            <div class="home_img"></div>
            <div class="header">
                <div class="holiday">Holidays</div>
                <div class="date">Date</div>
                <div class="ver_line"></div>
            </div>
            <div class="body">
                <p style="left:15vw">Republic Day</p>
                <p style="right:20vw">Tue, 26 Jan, 2021</p><br>
                <p style="left:15vw">Republic Day</p>
                <p style="right:20vw">Tue, 26 Jan, 2021</p><br>
                <p style="left:15vw">Republic Day</p>
                <p style="right:20vw">Tue, 26 Jan, 2021</p><br>
                <p style="left:15vw">Republic Day</p>
                <p style="right:20vw">Tue, 26 Jan, 2021</p><br>
                <p style="left:15vw">Republic Day</p>
                <p style="right:20vw">Tue, 26 Jan, 2021</p><br>
                <p style="left:15vw">Republic Day</p>
                <p style="right:20vw">Tue, 26 Jan, 2021</p><br>
                <p style="left:15vw">Republic Day</p>
                <p style="right:20vw">Tue, 26 Jan, 2021</p><br>
                <p style="left:15vw">Republic Day</p>
                <p style="right:20vw">Tue, 26 Jan, 2021</p><br>
                <p style="left:15vw">Republic Day</p>
                <p style="right:20vw">Tue, 26 Jan, 2021</p><br>
                <p style="left:15vw">Republic Day</p>
                <p style="right:20vw">Tue, 26 Jan, 2021</p>
            </div>
        </div>
    `
})

export class twelvepagecomponent {}