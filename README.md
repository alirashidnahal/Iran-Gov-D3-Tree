# Iran-Gov D3 Tree
<div dir="rtl">

درختواره‌ای تعاملی از ساختار دولت جمهوری اسلامی ایران، با استفاده از D3.js. این پروژه به صورت متن‌باز طراحی شده و برای مشارکت عمومی در توسعه ساختارهای نهادی قابل گسترش است.

## ویژگی‌ها

* نمایش درختی سلسله‌مراتبی از نهادهای دولتی
* قابلیت بزرگ‌نمایی و جابه‌جایی
* جستجوی زنده میان نهادها
* توضیحات کامل به‌همراه لینک و تصویر برای هر نهاد

## پیش‌نمایش زنده

> اگر روی GitHub Pages منتشر کرده‌اید:
> [https://alirashidnahal.github.io/Iran-Gov-D3-Tree/](https://alirashidnahal.github.io/Iran-Gov-D3-Tree/)

## ساختار فایل‌ها

```
├── index.html              # فایل اصلی شامل D3.js و رابط گرافیکی
├── data.json               # داده‌های ساختار درختی (نهادها)
├── assets
│   └── css
│       └── style.css
│   └── fonts
│   └── js
│       └── app.js
├── README.md
├── robots.txt
├── site.webmanifest
```

## نحوه اجرا

۱. کلون کردن پروژه:

```bash
git clone https://github.com/alirashidnahal/Iran-Gov-D3-Tree.git
cd Iran-Gov-D3-Tree
```

۲. اجرای محلی با سرور ساده:

```bash
python -m http.server 8000
# یا با Node.js:
npx serve .
```

۳. مرور در:

```
http://localhost:8000/
```

## مشارکت

خوشحال می‌شویم شما هم ساختار نهادهای مختلف را کامل‌تر کنید.

* `data.json` را ویرایش یا به‌روزرسانی کنید.
* تصاویر، لینک‌ها و توضیحات را اضافه نمایید.
* Pull Request ارسال کنید.

## مجوز

[MIT License](LICENSE)
</div>
