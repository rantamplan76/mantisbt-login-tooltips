<?php
class LoginTooltipsPlugin extends MantisPlugin {

    function register() {
        $this->name        = 'Login Tooltips';
        $this->description = 'Adds explanatory tooltips to the login page options.';
        $this->page        = '';
        $this->version     = '1.0.0';
        $this->dependencies = array(
            'MantisCore' => '2.0.0',
        );
        $this->author      = 'Javi Escartín (rantamplan76)';
        $this->contact     = 'javi@javiescartin.com';
        $this->url         = 'https://github.com/rantamplan76/mantisbt-login-tooltips';
    }

    function hooks() {
        return array(
            'EVENT_LAYOUT_BODY_END' => 'scripts',
        );
    }

    function scripts($p_event) {
        if( basename( $_SERVER['SCRIPT_NAME'] ) === 'login_password_page.php' ) {
            echo '<script type="application/json" id="login-tooltips-data">'
                . json_encode( array(
                    'remember_login' => plugin_lang_get( 'remember_login' ),
                    'secure_session' => plugin_lang_get( 'secure_session' ),
                ) )
                . '</script>';
            echo '<script type="text/javascript" src="' . plugin_file( 'tooltips.js' ) . '&v=' . filemtime( __DIR__ . '/files/tooltips.js' ) . '"></script>';
        }
    }
}