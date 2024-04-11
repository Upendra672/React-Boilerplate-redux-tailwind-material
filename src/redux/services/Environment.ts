const parsedUrl = new URL(window.location.href);
const dynamicUrl = parsedUrl.origin;

export const environment = {
    production: false,
    API_PATH: 'http://192.168.10.12:4200',
};

if (environment.production) {
    // if dynamicURL is with port number then we need to create API_PATH with port number+1 than dynamicURL port number
    console.log('dynamicUrl: ', window.location);
    if (window.location.port) {
        console.log("A");
        //parse the port number and hostname from dynamicURL via split from :
        const API_PORT = parseInt(window.location.port);
        environment.API_PATH = window.location.protocol + '//' + window.location.hostname + ':' + API_PORT;
    }
    else {
        console.log("B");
        environment.API_PATH = dynamicUrl
    }
    console.log('environment.API_PATH: ', environment.API_PATH);
}
