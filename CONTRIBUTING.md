# Contributing to Login Tooltips

[Versión en español](#contribuyendo-a-login-tooltips)

Thank you for your interest in contributing to the Login Tooltips plugin! We welcome contributions from the community, whether it's reporting bugs, suggesting features, translating to new languages, or improving the code.

## How to Contribute

### Reporting Bugs

1. Check the [issues page](https://github.com/rantamplan76/mantisbt-login-tooltips/issues) to see if your bug has already been reported.
2. If not, create a new issue with:
   - A clear title describing the problem
   - A detailed description of the bug
   - Steps to reproduce it
   - Expected vs. actual behavior
   - MantisBT version and any relevant environment details

### Suggesting Features

1. Check the [issues page](https://github.com/rantamplan76/mantisbt-login-tooltips/issues) to see if your idea has been discussed.
2. Create a new issue with:
   - A clear title
   - A detailed description of the feature
   - Why you think it would be useful
   - Any alternative solutions you've considered

### Adding or Improving Translations

1. Fork the repository
2. Create a new language file in `LoginTooltips/lang/strings_<language>.txt` following the pattern in `strings_english.txt`
3. Add the two required variables:
   ```php
   <?php
   $s_plugin_LoginTooltips_remember_login = 'Your translated text here.';
   $s_plugin_LoginTooltips_secure_session = 'Your translated text here.';
   ```
4. Submit a pull request with a clear description of the translation

### Code Contributions

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes, following these guidelines:
   - Keep code simple and readable
   - Maintain CSP compliance (no inline scripts)
   - Test your changes in MantisBT 2.0.0+
4. Commit with clear, descriptive messages
5. Push to your fork and submit a pull request

### Versioning

This project uses **Linux-style semantic versioning** (MAJOR.MINOR.CORRECTION):
- **MAJOR**: Breaking changes or significant new features
- **MINOR**: New features or improvements (backwards compatible)
- **CORRECTION**: Bug fixes

Examples: `1.0.0` → `1.1.0` (new feature) → `1.1.1` (bug fix) → `2.0.0` (breaking change)

## Development Guidelines

- **PHP**: Keep it compatible with MantisBT 2.0.0+
- **JavaScript**: Use vanilla JavaScript or jQuery (included in MantisBT), no external dependencies
- **Security**: Always maintain CSP compliance; use `<script type="application/json">` for data passing
- **Languages**: Use MantisBT's language file system for all user-facing text
- **Testing**: Test thoroughly in the MantisBT login flow

## Code of Conduct

Please be respectful and constructive in all interactions. We're here to help each other improve the plugin.

---

# Contribuyendo a Login Tooltips

[English version](#contributing-to-login-tooltips)

¡Gracias por tu interés en contribuir al plugin Login Tooltips! Aceptamos contribuciones de la comunidad, ya sean reportes de bugs, sugerencias de características, traducciones a nuevos idiomas o mejoras de código.

## Cómo Contribuir

### Reportar Bugs

1. Revisa la [página de issues](https://github.com/rantamplan76/mantisbt-login-tooltips/issues) para ver si tu bug ya ha sido reportado.
2. Si no, crea un nuevo issue con:
   - Un título claro describiendo el problema
   - Una descripción detallada del bug
   - Pasos para reproducirlo
   - Comportamiento esperado vs. real
   - Versión de MantisBT y detalles relevantes del entorno

### Sugerir Características

1. Revisa la [página de issues](https://github.com/rantamplan76/mantisbt-login-tooltips/issues) para ver si tu idea ya ha sido discutida.
2. Crea un nuevo issue con:
   - Un título claro
   - Una descripción detallada de la característica
   - Por qué crees que sería útil
   - Cualquier solución alternativa que hayas considerado

### Añadir o Mejorar Traducciones

1. Haz un fork del repositorio
2. Crea un nuevo archivo de idioma en `LoginTooltips/lang/strings_<idioma>.txt` siguiendo el patrón de `strings_english.txt`
3. Añade las dos variables requeridas:
   ```php
   <?php
   $s_plugin_LoginTooltips_remember_login = 'Tu texto traducido aquí.';
   $s_plugin_LoginTooltips_secure_session = 'Tu texto traducido aquí.';
   ```
4. Envía un pull request con una descripción clara de la traducción

### Contribuciones de Código

1. Haz un fork del repositorio
2. Crea una rama de feature (`git checkout -b feature/tu-feature`)
3. Realiza tus cambios, siguiendo estas directrices:
   - Mantén el código simple y legible
   - Preserva la compatibilidad con CSP (sin scripts inline)
   - Prueba tus cambios en MantisBT 2.0.0+
4. Realiza commits con mensajes claros y descriptivos
5. Haz push a tu fork y envía un pull request

### Versionado

Este proyecto utiliza **versionado semántico estilo Linux** (MAYOR.MENOR.CORRECCIÓN):
- **MAYOR**: Cambios incompatibles o características nuevas significativas
- **MENOR**: Nuevas características o mejoras (compatibles hacia atrás)
- **CORRECCIÓN**: Correcciones de bugs

Ejemplos: `1.0.0` → `1.1.0` (característica nueva) → `1.1.1` (corrección de bug) → `2.0.0` (cambio incompatible)

## Directrices de Desarrollo

- **PHP**: Mantén compatibilidad con MantisBT 2.0.0+
- **JavaScript**: Usa JavaScript vanilla o jQuery (incluido en MantisBT), sin dependencias externas
- **Seguridad**: Siempre mantén compatibilidad con CSP; usa `<script type="application/json">` para pasar datos
- **Idiomas**: Usa el sistema de archivos de idioma de MantisBT para todo texto visible al usuario
- **Pruebas**: Prueba exhaustivamente en el flujo de login de MantisBT

## Código de Conducta

Por favor, sé respetuoso y constructivo en todas las interacciones. Estamos aquí para ayudarnos mutuamente a mejorar el plugin.
