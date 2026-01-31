# Fyrre Magazine

**Fyrre Magazine** is a modern digital publication platform built with **Ruby on Rails** and **Inertia.js** +
**React.js**
This application is designed to provide a seamless reading experience with a highly performant frontend and a robust
backend content management system.

![Ruby Version](https://img.shields.io/badge/ruby-4.0.0-red.svg)
![Rails Version](https://img.shields.io/badge/rails-8.1.2-red.svg)
![Inertia React](https://img.shields.io/npm/v/@inertiajs/react?label=Inertia%20React&color=5A67D8)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🧐 About the Project

Fyrre Magazine is a web application that serves as a digital
magazine.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fgithub.com%2FNull-logic-0%2Ffyrre_magazine)] It allows for
the publishing, management, and consumption of
articles.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fgithub.com%2FNull-logic-0%2Ffyrre_magazine)] The project
leverages the power of Rails for the backend API and logic, while using Vite to bundle modern JavaScript and CSS assets
for a responsive frontend
experience.[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fgithub.com%2FNull-logic-0%2Ffyrre_magazine)]

## 🛠 Tech Stack

**Backend**

- [Ruby on Rails](https://rubyonrails.org/) - The web application
- [PostgreSQL](https://www.postgresql.org/) - Relational database

**Frontend**

- React.js
- JavaScript
- TailwindCSS
- Inertia.js

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Ruby** (Check `.ruby-version` for the specific
  version)
- **Node.js** & **Yarn/NPM**
- **PostgreSQL** or **SQLite

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Null-logic-0/fyrre_magazine.git
   cd fyrre_magazine

2. **Install Backend Dependencies**
   ```bash
   bundle install

3. **Install Frontend Dependencies**
   ```bash
   yarn install
   # or
   npm install

4. **Database Setup**
   Create and seed the database:
   ```bash
   bin/rails db:create
   bin/rails db:migrate
   bin/rails db:seed

## 💻 Development

To start the local development server:

```bash
bin/rails server