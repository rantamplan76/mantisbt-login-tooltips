# Login Tooltips — MantisBT Plugin

[Versión en español](#login-tooltips--plugin-para-mantisbt)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)](https://github.com/rantamplan76/mantisbt-login-tooltips/releases)
[![MantisBT](https://img.shields.io/badge/MantisBT-2.0.0+-green.svg)](https://mantisbt.org)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/rantamplan76/mantisbt-login-tooltips/graphs/commit-activity)

Adds explanatory tooltips to the MantisBT login page options, helping users understand what "Remember my login" and "Secure session" do before enabling them.

## Features

- Tooltip on the **Remember my login** checkbox
- Tooltip on the **Secure session (lock to IP)** checkbox
- Fully **multilingual** via MantisBT's language file system
- **CSP-compliant** — no inline scripts
- Automatic **cache busting** on JS file changes

## Requirements

- MantisBT 2.0.0 or higher
- Bootstrap tooltips (included in MantisBT's default theme)

## Installation

1. Copy the `LoginTooltips` folder into your MantisBT `plugins/` directory.
2. Log in as administrator and go to **Manage → Plugins**.
3. Find **Login Tooltips** and click **Install**.

## Adding a new language

1. Create `lang/strings_<language>.txt` (e.g. `strings_french.txt`).
2. Add the following variables:

```php
<?php
$s_plugin_LoginTooltips_remember_login = 'Your translated text here.';
$s_plugin_LoginTooltips_secure_session = 'Your translated text here.';
```

MantisBT will automatically load the file matching the user's language preference.

## Using as a template

This plugin can serve as a starting point for any customization targeting the MantisBT login flow. The key is the page filter inside the `scripts()` method:

```php
// Only the username/login page
if( basename( $_SERVER['SCRIPT_NAME'] ) === 'login_page.php' ) { ... }

// Only the password page (remember me, secure session) — current plugin behavior
if( basename( $_SERVER['SCRIPT_NAME'] ) === 'login_password_page.php' ) { ... }

// Both login pages
if( in_array( basename( $_SERVER['SCRIPT_NAME'] ), ['login_page.php', 'login_password_page.php'] ) ) { ... }
```

The rest of the plugin structure (language files, CSP-safe data passing via `<script type="application/json">`, cache busting) applies to any similar use case.

## Author

**Javi Escartín** ([rantamplan76](https://github.com/rantamplan76))  
javi@javiescartin.com

## License

MIT

---

# Login Tooltips — Plugin para MantisBT

[English version](#login-tooltips--mantisbt-plugin)

[![Licencia: MIT](https://img.shields.io/badge/Licencia-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Versión](https://img.shields.io/badge/Versión-1.0.0-blue.svg)](https://github.com/rantamplan76/mantisbt-login-tooltips/releases)
[![MantisBT](https://img.shields.io/badge/MantisBT-2.0.0+-green.svg)](https://mantisbt.org)
[![Mantenimiento](https://img.shields.io/badge/¿Mantenido%3F-sí-green.svg)](https://github.com/rantamplan76/mantisbt-login-tooltips/graphs/commit-activity)

Añade tooltips explicativos en las opciones de la página de inicio de sesión de MantisBT, ayudando a los usuarios a entender qué hacen las opciones "Mantener mi sesión iniciada" y "Sesión segura" antes de activarlas.

## Características

- Tooltip en el checkbox **Mantener mi sesión iniciada**
- Tooltip en el checkbox **Sesión segura (restringida a la IP)**
- Totalmente **multilenguaje** mediante el sistema de archivos de idioma de MantisBT
- **Compatible con CSP** — sin scripts inline
- **Cache busting automático** al modificar el archivo JS

## Requisitos

- MantisBT 2.0.0 o superior
- Tooltips de Bootstrap (incluidos en el tema por defecto de MantisBT)

## Instalación

1. Copia la carpeta `LoginTooltips` en el directorio `plugins/` de tu instalación de MantisBT.
2. Inicia sesión como administrador y ve a **Gestión → Plugins**.
3. Busca **Login Tooltips** y haz clic en **Instalar**.

## Añadir un nuevo idioma

1. Crea el archivo `lang/strings_<idioma>.txt` (p. ej. `strings_french.txt`).
2. Añade las siguientes variables:

```php
<?php
$s_plugin_LoginTooltips_remember_login = 'Tu texto traducido aquí.';
$s_plugin_LoginTooltips_secure_session = 'Tu texto traducido aquí.';
```

MantisBT cargará automáticamente el archivo que coincida con el idioma preferido del usuario.

## Usar como plantilla

Este plugin puede servir como punto de partida para cualquier personalización que afecte al flujo de inicio de sesión de MantisBT. La clave está en el filtro de página dentro del método `scripts()`:

```php
// Solo la página de usuario/login
if( basename( $_SERVER['SCRIPT_NAME'] ) === 'login_page.php' ) { ... }

// Solo la página de contraseña (recordar sesión, sesión segura) — comportamiento actual del plugin
if( basename( $_SERVER['SCRIPT_NAME'] ) === 'login_password_page.php' ) { ... }

// Ambas páginas de login
if( in_array( basename( $_SERVER['SCRIPT_NAME'] ), ['login_page.php', 'login_password_page.php'] ) ) { ... }
```

El resto de la estructura del plugin (archivos de idioma, paso de datos compatible con CSP mediante `<script type="application/json">`, cache busting automático) es aplicable a cualquier caso de uso similar.

## Autor

**Javi Escartín** ([rantamplan76](https://github.com/rantamplan76))  
javi@javiescartin.com

## Licencia

MIT
