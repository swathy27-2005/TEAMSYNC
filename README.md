# 🚀 TeamSync — Smart Task & Collaboration App
### Mobile Backend Services (MBaaS) Mini Project

---

## 📁 Files
| File | Purpose |
|------|---------|
| `index.html` | Complete single-file web app |
| `firebase-config.js` | Config template + Firestore rules |

---

## ✅ Firebase Features Implemented

| Feature | Where Used |
|---------|-----------|
| **Firebase Auth — Email/Password** | Register & Login forms |
| **Firebase Auth — Google OAuth** | "Continue with Google" button |
| **onAuthStateChanged** | Auto login/logout detection |
| **Cloud Firestore — addDoc** | Save new tasks |
| **Cloud Firestore — onSnapshot** | Real-time task & chat sync |
| **Cloud Firestore — updateDoc** | Toggle task complete |
| **Cloud Firestore — deleteDoc** | Delete tasks |
| **Firestore — setDoc (users)** | Store user profile + role |
| **JWT Token** | Displayed + copyable in Profile page |
| **FCM (simulated)** | "Send Test Notification" button |
| **Analytics (stub)** | Service status card in Analytics |
| **Crashlytics (stub)** | Service status shown |
| **Role-Based Access Control** | Admin vs Member permissions |

---

## ✅ Lab Questions Covered

| Lab Question | Implementation |
|-------------|---------------|
| Real-time chat with authentication | Team Chat page with Firestore `onSnapshot` per channel |
| CRUD operations | Tasks: Create, Read (live), Update (toggle), Delete |
| User registration + login | Full auth screen with Email + Google |
| Push notifications | Notification page + "Send Test Notification" |
| JWT and role-based access | Profile page shows JWT; RBAC grid |
| Full-stack MBaaS app | Auth + Firestore DB + real-time + cloud functions |
| Offline persistence | Can add `enableIndexedDbPersistence()` to Firestore init |

---

## 🔧 Setup Instructions

### Step 1 — Create Firebase Project
1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → name it `teamsync`
3. Enable Google Analytics (optional)

### Step 2 — Enable Auth Providers
1. Go to **Authentication → Sign-in method**
2. Enable **Email/Password**
3. Enable **Google** → add your support email

### Step 3 — Create Firestore Database
1. Go to **Firestore Database → Create database**
2. Start in **Test mode** (for development)
3. Paste the security rules from `firebase-config.js` for production

### Step 4 — Get Config & Paste into index.html
1. Go to **Project Settings → Your apps → Web app**
2. Copy the `firebaseConfig` object
3. In `index.html`, find the comment `// ─── FIREBASE CONFIG ───`
4. Replace the placeholder values with your real config

### Step 5 — Run the App
```bash
# Option 1: Simple local server
npx serve .

# Option 2: Python
python -m http.server 3000

# Option 3: Firebase Hosting
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

---

## 🗄️ Firestore Collections
```
users/        {uid}   → name, email, role, provider, createdAt
tasks/        {id}    → title, priority, category, due, done, uid, userName
chat_general/ {id}    → text, uid, userName, photoURL, createdAt
chat_development/ ...
chat_design/  ...
chat_random/  ...
```

---

## 🔐 Role-Based Access (RBAC)
| Permission | Admin | Member |
|-----------|-------|--------|
| View Tasks | ✓ | ✓ |
| Create Tasks | ✓ | ✓ |
| Delete Any Task | ✓ | ✗ |
| Send Messages | ✓ | ✓ |
| Manage Users | ✓ | ✗ |
| View Analytics | ✓ | ✓ |

---

## 📸 Pages Overview
- **Dashboard** — Stats overview, recent tasks, team activity feed
- **Tasks** — Full CRUD with filter by priority/status
- **Team Chat** — Real-time multi-channel messaging (4 channels)
- **Notifications** — Notification feed + FCM test trigger
- **Analytics** — Task stats, completion rate, service status
- **Profile** — User info, JWT token viewer, RBAC display
