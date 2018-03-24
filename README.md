# react-recaptcha
Google reCaptcha implementation for Reactjs.

How to use:

```
import CaptchaComponent from '<path-to-component>';
...
const invokeOnCaptchaResponse = (isSuccess) => {
    /*odblokuj/zablokuj funkcjonalność.*/
};
...
return (
    <div>
        ...
        <CaptchaComponent
            domId="<custom-captcha-id-here>"
            siteKey="<captcha-sitekey-here>"
            callback={invokeOnCaptchaResponse}
        />
        ...
    </div>
);
```

More info: http://frontninja.pl/react/reactjs/2018/03/06/react-captcha-component.html
