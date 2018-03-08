# react-recaptcha
Google reCaptcha implementation for Reactjs.

How to use:

```
import CaptchaComponent from '<path-to-component>';
...
const invokeWhenCaptchaResponseWithSuccess = () => {
    alert("Success!");
};
...
return (
    <div>
        ...
        <CaptchaComponent
            domId="<custom-captcha-id-here>"
            siteKey="<captcha-sitekey-here>"
            callback={invokeWhenCaptchaResponseWithSuccess}
        />
        ...
    </div>
);
```

More info: http://frontninja.pl/react/reactjs/2018/03/06/react-captcha-component.html
