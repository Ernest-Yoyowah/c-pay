```
src/
│
├── app/                    # App entry & navigation
│   ├── App.tsx
│   ├── navigation/
│   │   ├── RootNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   ├── MainNavigator.tsx
│   │   └── linking.ts
│   └── store.ts            # Redux/Zustand setup
│
├── features/               # Feature-first (core)
│   ├── auth/
│   │   ├── screens/
│   │   ├── components/
│   │   ├── auth.api.ts
│   │   ├── auth.slice.ts
│   │   ├── auth.types.ts
│   │   └── auth.utils.ts
│   │
│   ├── onboarding/
│   │   ├── screens/
│   │   ├── onboarding.api.ts
│   │   └── onboarding.types.ts
│   │
│   ├── wallet/
│   │   ├── screens/
│   │   ├── components/
│   │   ├── wallet.api.ts
│   │   ├── wallet.slice.ts
│   │   └── wallet.types.ts
│   │
│   ├── payments/
│   │   ├── screens/
│   │   ├── components/
│   │   ├── payments.api.ts
│   │   ├── payments.slice.ts
│   │   └── payments.types.ts
│   │
│   ├── cards/
│   │   ├── screens/
│   │   ├── cards.api.ts
│   │   └── cards.types.ts
│   │
│   ├── transactions/
│   │   ├── screens/
│   │   ├── transaction.api.ts
│   │   └── transaction.types.ts
│   │
│   └── profile/
│       ├── screens/
│       ├── profile.api.ts
│       └── profile.types.ts
│
├── shared/                 # Reusable but non-domain-specific
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Loader.tsx
│   │   └── Modal.tsx
│   │
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   └── useBiometrics.ts
│   │
│   ├── theme/
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   └── spacing.ts
│   │
│   └── utils/
│       ├── formatCurrency.ts
│       ├── validators.ts
│       └── date.ts
│
├── services/               # App-wide services
│   ├── api/
│   │   ├── client.ts       # Axios / fetch wrapper
│   │   ├── interceptors.ts
│   │   └── endpoints.ts
│   │
│   ├── auth/
│   │   ├── token.service.ts
│   │   └── biometrics.service.ts
│   │
│   ├── storage/
│   │   ├── secure.storage.ts
│   │   └── async.storage.ts
│   │
│   └── analytics/
│       └── analytics.service.ts
│
├── config/                 # Configuration
│   ├── env.ts
│   ├── constants.ts
│   └── featureFlags.ts
│
├── types/                  # Global shared types
│   ├── api.ts
│   └── navigation.ts
│
├── i18n/                   # Localization
│   ├── en.json
│   └── index.ts
│
├── assets/
│   ├── images/
│   └── icons/
│
└── tests/
    ├── unit/
    ├── integration/
    └── e2e/

```
