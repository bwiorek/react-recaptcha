import React from "react";
import CaptchaComponent from '<ścieżka-do-komponentu>';

class ExampleComopnent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const invokeOnCaptchaResponse = (isSuccess) => {
            /*odblokuj/zablokuj funkcjonalność.*/
        };
        
        return (
            <div>
                <CaptchaComponent
                    domId="google-captcha"
                    siteKey="6LdncEoUAAAAAMfQGXFs5zW10FG1FG2paicPf4n9"
                    callback={invokeOnCaptchaResponse}
                />
            </div>
        );
    }
}