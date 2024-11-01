> [!IMPORTANT]
>
> Most users of this project are from private repositories. Therefore, this project may have some opinionated designs.

## Example

```astro
---
// This is a blank HTML template with the Bulma and Font Awesome loaded through CDN
import { BaseLayout } from '@aqzhyi/astro-bulma'
---

<BaseLayout>
  <Fragment slot='head'>
    <title>Home</title>
  </Fragment>

  <nav
    class='navbar'
    role='navigation'
    aria-label='main navigation'
  >
    <div class='navbar-brand'>
      <a
        class='navbar-item'
        href='https://github.com/Aqzhyi'
        target='_blank'
      >
        <img
          src='/avatar-defaults.jpg'
          width='28'
          height='28'
        />
      </a>

      <a
        role='button'
        class='navbar-burger'
        aria-label='menu'
        aria-expanded='false'
        data-target='navbarBasicExample'
      >
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
      </a>
    </div>
    <div class='navbar-end'>
      <div class='navbar-item'>
        <div class='buttons'>
          <span class='icon-text'>
            <i
              slot='icon'
              class='fa-brands fa-square-github'
            ></i>
            <a
              slot='text'
              href='https://github.com/aqzhyi'
            >
              Github
            </a>
          </span>
        </div>
      </div>
    </div>
  </nav>
</BaseLayout>

<style>
  .root {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
</style>
```

# Objective

## bulma.io

- [ ] several blank `Layout.astro` templates, but with Bulma CSS

      for designers to make their own content designs

- [ ] several preset `BulmaComponent.astro` components
- [ ] RWD patterns
- [ ] Google Analytics 4 slots

## react.dev

> [!TIP]
>
> TBD...
