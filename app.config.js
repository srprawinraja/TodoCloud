import 'dotenv/config';
export default ({ config }) => ({
  ...config,
  expo: {
    ...config.expo,
    "owner": "srprawinraja",
    android: {
      package: "com.srprawinraja.todocloud"
    },
    extra: {
      ...config.expo?.extra, // Preserve existing properties
      clerkPublishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
      eas: {
        projectId: "b8946471-1c47-4ad5-9361-005d371f973e"
      }
    },
  },
});