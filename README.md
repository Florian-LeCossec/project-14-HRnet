# HRnet

## �� Description

HRnet is a web application for employee management developed with React, TypeScript, and Vite.

## 🚀 Technologies used

- **React 19** with TypeScript
- **Vite** for build and development
- **Redux Toolkit** for state management
- **Material-UI** for the date-picker
- **React Router** for navigation
- **TanStack Table** for data display
- **TanStack Form** for form management
- **flcossec/react-modal** for the modal
- **react-select** for the selector

## 📦 Installation

1. **Clone the repository**:
```bash
git clone [git@github.com:Florian-LeCossec/P14-HR-modal-plugin.git]
cd HRnet
```

2. **Install dependencies**:
```bash
npm install
# or
pnpm install
# or
yarn install
```

## 🏃‍♂️ How to run the application

### Development mode
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

The application will be accessible at: `http://localhost:5173`

### Production mode
```bash
# Build the application
npm run build
# or
pnpm build

# Preview the build
npm run preview
# or
pnpm preview
```

## 📁 Project structure

```
src/
├── components/          # Reusable components
│   ├── DataTable/      # Data table
│   ├── Datepicker/     # Date picker
│   └── Select/         # Selection component
├── data/               # Static data (states, departments)
├── features/           # Redux slices
├── hooks/              # Custom hooks
├── pages/              # Application pages
│   ├── EmployeeForm.tsx    # Creation form
│   └── EmployeeList.tsx    # Employee list
├── types/              # TypeScript types
└── store.ts            # Redux configuration
```

## 🎯 Features

### Home page - Employee creation form
- Personal information input (first name, last name, date of birth)
- Professional information (start date, department)
- Complete address (street, city, state, zip code)
- Real-time field validation
- Confirmation modal after creation

### Employee list page
- Tabular display of all employees
- Column sorting
- Navigation to creation form
- Locally persisted data (Redux)

## 🛠️ Available scripts

- `npm run dev` : Start development server
- `npm run build` : Build application for production
- `npm run preview` : Preview production build
- `npm run lint` : Check code with ESLint

## 🔧 Configuration

The application uses:
- **TypeScript** for static typing
- **ESLint** for code quality
- **Vite** for fast development
- **Material-UI** for the date picker design
- **Tanstack** for the form and the data-table

## 📝 Notes

- Data is stored locally via Redux (no persistent database)
- All components are typed with TypeScript
