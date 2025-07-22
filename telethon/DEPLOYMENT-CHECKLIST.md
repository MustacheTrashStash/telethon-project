# Medusa Deployment Checklist

## Prerequisites ✅
- [x] Production build created (`npm run build`)
- [x] Database (PostgreSQL) configured with SSL
- [x] Redis/Valkey instance configured
- [x] medusa-config.ts updated with Redis modules

## Generated Secure Secrets (Use these in production):
```
COOKIE_SECRET=6196c91c7e2cb84e84024444d694f99228fd07f607d8699b6b6c6afad7a32e952
JWT_SECRET=5e4c4f68deb2d030d21c80ecc29b00e3445b6105db3d3a8a3970a240c7cffa9075
```

## Deployment Steps

### 1. Deploy Server Mode Instance

#### Environment Variables:
Copy from `deployment-env-server.txt` and update:
- Replace `https://your-storefront-url.com` with actual storefront URL
- Replace `https://your-medusa-server-url.com` with actual server URL
- Use the secure secrets generated above

#### Start Command:
```bash
cd .medusa/server && npm install && npm run predeploy && npm run start
```

### 2. Deploy Worker Mode Instance

#### Environment Variables:
Copy from `deployment-env-worker.txt`
- Use the same secure secrets as server mode

#### Start Command:
```bash
cd .medusa/server && npm install && npm run start
```

### 3. Update Server Configuration

After server deployment, update these environment variables in SERVER MODE:
```
ADMIN_CORS=https://your-actual-server-url.com
AUTH_CORS=https://your-storefront-url.com,https://your-actual-server-url.com
MEDUSA_BACKEND_URL=https://your-actual-server-url.com
```

### 4. Test Deployment

1. Visit `https://your-server-url.com/health` - should return "OK"
2. Visit `https://your-server-url.com/app` - Medusa Admin should load

### 5. Create Admin User

Run this command on your server:
```bash
npx medusa user -e admin@yourdomain.com -p your-secure-password
```

## Files to Upload

Make sure to upload your entire built application:
- `.medusa/server/` directory (created by `npm run build`)
- `certs/ca-certificate.crt` (for SSL database connection)

## Notes

- Server mode serves the API and Admin dashboard
- Worker mode handles background jobs and workflows  
- Both instances connect to the same database and Redis
- Admin dashboard is static and communicates with server via API calls
- The CA certificate must be present for SSL database connection
