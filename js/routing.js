const origen_URL = 'https://hellocode-blog.net/';

const historyState = { path: origen_URL };

window.addEventListener( 'popstate', ( e ) => {

    Inserta_entrada( e.state.path, false );
}, false );

window.addEventListener( 'load', () => {

    if(window.location.search)
    {
        historyState.path = new URLSearchParams( window.location.search ).get('path');

        history.replaceState( historyState, '', `${ origen_URL }${ historyState.path }`);

        Inserta_entrada( historyState.path, false );
    }else
    {
        historyState.path = 'portada.htm';

        history.replaceState( historyState, '', `${ origen_URL }portada.htm`);

        Inserta_entrada( historyState.path, false );
    }
}, false );