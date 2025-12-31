# Project Structure Documentation

This document explains the folder structure and architectural decisions of the React Native fintech application.  
The project follows a **feature-based, scalable, and security-conscious architecture** suitable for regulated financial products.

---

## 📁 High-Level Overview

```
src/
├── app/
├── features/
├── shared/
├── services/
├── config/
├── types/
├── i18n/
├── assets/
└── tests/
```

---

## 🧠 Architectural Principles

- **Feature-first organization** for scalability
- **Clear separation of concerns**
- **Security-sensitive logic isolated**
- **UI decoupled from business logic**
- **Audit- and compliance-friendly**

---

## 📦 app/ — Application Entry & Navigation

```
app/
├── App.tsx
├── store.ts
└── navigation/
    ├── RootNavigator.tsx
    ├── AuthNavigator.tsx
    ├── MainNavigator.tsx
    └── linking.ts
```

### Responsibilities:

- App bootstrap
- Global providers (state, theme, query client)
- Navigation structure
- Deep linking configuration

---

## 🧩 features/ — Domain-Based Modules (Core)

Each feature owns its screens, UI components, API calls, state, and types.

```
features/
├── auth/
├── onboarding/
├── wallet/
├── payments/
├── cards/
├── transactions/
└── profile/
```

### Example: `auth/`

```
auth/
├── screens/
├── components/
├── auth.api.ts
├── auth.slice.ts
├── auth.types.ts
└── auth.utils.ts
```

### Responsibilities:

- Business logic
- Feature-specific UI
- API interaction
- State management
- Domain types

✅ **This keeps financial logic isolated and auditable.**

---

## ♻️ shared/ — Reusable, Non-Domain Code

```
shared/
├── components/
├── hooks/
├── theme/
└── utils/
```

### Purpose:

- Generic UI components
- Reusable hooks
- Design system (colors, spacing, typography)
- Formatting & validation helpers

🚫 **No business or financial logic here.**

---

## 🔐 services/ — Infrastructure & Security

```
services/
├── api/
├── auth/
├── storage/
└── analytics/
```

### Key Responsibilities:

- API client & interceptors
- Authentication token handling
- Secure storage (Keychain / SecureStore)
- Biometrics integration
- Analytics & logging

⚠️ **UI components must not directly access tokens or secure storage.**

---

## ⚙️ config/ — App Configuration

```
config/
├── env.ts
├── constants.ts
└── featureFlags.ts
```

### Used for:

- Environment variables
- App-wide constants
- Feature toggles (useful for staged rollouts & compliance)

---

## 🧾 types/ — Global Type Definitions

```
types/
├── api.ts
└── navigation.ts
```

Contains shared TypeScript types used across multiple features.

---

## 🌍 i18n/ — Localization

```
i18n/
├── index.ts
└── en.json
```

Handles translations and locale configuration.

---

## 🧪 tests/ — Testing Strategy

```
tests/
├── unit/
├── integration/
└── e2e/
```

### Test Coverage:

- **Unit tests**: utilities, reducers, hooks
- **Integration tests**: feature workflows
- **E2E tests**: critical user journeys (login, payments)

---

## 🖼️ assets/ — Static Assets

```
assets/
├── images/
└── icons/
```

Stores images, icons, and other static resources.

---

## 🚫 Anti-Patterns (Avoid)

- ❌ Mixing API calls inside UI components
- ❌ Storing auth tokens in AsyncStorage
- ❌ Large global utils with business logic
- ❌ Flat `screens/components/services` structure

---

## ✅ Benefits of This Structure

- ✨ Scales cleanly as features grow
- 🔒 Easier security audits & compliance reviews
- 🎯 Clear ownership of business logic
- 👥 Improved developer onboarding
- 🛡️ Reduced refactor risk

---

## 📌 Notes

This structure is optimized for:

- **Fintech applications**
- **Regulated environments**
- **Medium-to-large teams**
- **Long-term maintainability**
