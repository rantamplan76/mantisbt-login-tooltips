# Security Policy

[Versión en español](#política-de-seguridad)

## Supported Versions

The Login Tooltips plugin follows the security support of MantisBT versions.

| Version | MantisBT Compatibility | Status |
|---------|----------------------|--------|
| 1.0.x   | 2.0.0+               | Supported |

## Reporting a Vulnerability

If you discover a security vulnerability in the Login Tooltips plugin, please **do not** open a public issue on GitHub. Instead, please email the vulnerability details to:

📧 **javi@javiescartin.com**

Please include:
- A description of the vulnerability
- Steps to reproduce the issue (if applicable)
- The version(s) affected
- Any potential impact or severity assessment

I will acknowledge your report within 48 hours and work with you to understand and address the issue.

## Security Considerations

### Content Security Policy (CSP)
This plugin is designed to be fully compliant with Content Security Policy. All data is passed to JavaScript through JSON blocks in `<script type="application/json">` tags, and no inline event handlers or scripts are used.

### MantisBT Integration
This plugin integrates with MantisBT's core login flow. It:
- Does not store any user data
- Does not modify authentication mechanisms
- Does not bypass any security features
- Only adds UI tooltips to help users understand login options

### Dependencies
The plugin has **zero external dependencies**. It uses only:
- Vanilla JavaScript or jQuery (included in MantisBT)
- Bootstrap tooltips (included in MantisBT's default theme)
- MantisBT's native language system

### Best Practices
- Keep MantisBT updated to the latest version
- Enable CSP headers in your web server configuration
- This plugin requires no special permissions and only modifies the login page UI
- Report any suspicious behavior to this repository's security contact

---

# Política de Seguridad

[English version](#security-policy)

## Versiones Soportadas

El plugin Login Tooltips sigue el soporte de seguridad de las versiones de MantisBT.

| Versión | Compatibilidad MantisBT | Estado |
|---------|----------------------|--------|
| 1.0.x   | 2.0.0+               | Soportada |

## Reportar una Vulnerabilidad

Si descubres una vulnerabilidad de seguridad en el plugin Login Tooltips, por favor **no** abras un issue público en GitHub. En su lugar, por favor envía los detalles de la vulnerabilidad a:

📧 **javi@javiescartin.com**

Por favor incluye:
- Una descripción de la vulnerabilidad
- Pasos para reproducir el problema (si aplica)
- La(s) versión(es) afectada(s)
- Cualquier evaluación potencial del impacto o severidad

Reconoceré tu reporte dentro de 48 horas y trabajaré contigo para entender y abordar el problema.

## Consideraciones de Seguridad

### Política de Seguridad de Contenido (CSP)
Este plugin está diseñado para ser completamente compatible con la Política de Seguridad de Contenido. Todos los datos se pasan a JavaScript a través de bloques JSON en etiquetas `<script type="application/json">`, y no se utilizan manejadores de eventos inline ni scripts inline.

### Integración con MantisBT
Este plugin se integra con el flujo de login central de MantisBT. Esto:
- No almacena ningún dato de usuario
- No modifica mecanismos de autenticación
- No omite ninguna característica de seguridad
- Solo añade tooltips de interfaz de usuario para ayudar a los usuarios a entender las opciones de login

### Dependencias
El plugin tiene **cero dependencias externas**. Solo utiliza:
- JavaScript vanilla o jQuery (incluido en MantisBT)
- Tooltips de Bootstrap (incluidos en el tema por defecto de MantisBT)
- Sistema de idiomas nativo de MantisBT

### Mejores Prácticas
- Mantén MantisBT actualizado a la última versión
- Habilita encabezados CSP en la configuración de tu servidor web
- Este plugin no requiere permisos especiales y solo modifica la interfaz de la página de login
- Reporta cualquier comportamiento sospechoso al contacto de seguridad de este repositorio
