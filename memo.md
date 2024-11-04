## bulletproof-react

src/
├── app/
│ ├── (auth)/
│ │ ├── login/
│ │ │ └── page.tsx
│ │ └── register/
│ │ └── page.tsx
│ ├── dashboard/
│ │ └── page.tsx
│ ├── layout.tsx
│ └── page.tsx
├── components/
│ ├── common/
│ │ ├── Button/
│ │ │ ├── Button.tsx
│ │ │ └── index.ts
│ │ └── Input/
│ │ ├── Input.tsx
│ │ └── index.ts
│ └── layout/
│ ├── Header/
│ │ ├── Header.tsx
│ │ └── index.ts
│ └── Footer/
│ ├── Footer.tsx
│ └── index.ts
├── config/
│ └── environment.ts
├── features/
│ ├── auth/
│ │ ├── api/
│ │ ├── components/
│ │ ├── hooks/
│ │ └── types/
│ ├── users/
│ │ ├── api/
│ │ ├── components/
│ │ ├── hooks/
│ │ └── types/
│ └── products/
│ ├── api/
│ │ ├── getProducts.ts
│ │ ├── getProductDetails.ts
│ │ └── updateProduct.ts
│ ├── components/
│ │ ├── ProductList.tsx
│ │ ├── ProductCard.tsx
│ │ └── ProductForm.tsx
│ ├── hooks/
│ │ ├── useProducts.ts
│ │ └── useProductDetails.ts
│ ├── types/
│ │ └── index.ts
│ └── utils/
│ └── productHelpers.ts
├── hooks/
│ └── useLocalStorage.ts
├── lib/
│ └── api.ts
├── providers/
│ └── app.tsx
├── styles/
│ └── globals.css
└── utils/
└── formatDate.ts
