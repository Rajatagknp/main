import { Component } from "@angular/core";

@Component({
    selector: "thirdpage",
    styleUrls: ["page.style.scss"],
    template: `
        <div class="page_footer">
            <a routerLink="/remotestate/leave/second_page"><button type="button" class="back_button">Back</button></a>
            <a routerLink="/remotestate/leave"><button type="button" class="leave_page_button">Leave Form</button></a>
            <a routerLink="/remotestate/leave/fourth_page"><button type="button" class="next_button">Next</button></a>
        </div>
        <div class="third_page">
            <div class="third_page_header"></div>
            <div class="third_page_header_body"></div>
            <div class="third_page_body">
                <input class="loginid" type="text" placeholder="Login Id">
                <input class="password" type="text" placeholder="Passwrod">
                <button class="login_button" type="button">Login</button>
                <div class="or">Or</div>
                <div class="sign_in_with">Sign In with</div>
                <div class="google_button">
                    <div class="google_symbol"></div>
                    <div class="google_text">Google</div>
                </div>
            </div>
            <div class="third_page_footer"></div>
        </div>
    `
})

export class thirdpagecomponent {}