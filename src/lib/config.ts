const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`,
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const config = {
  env: getEnvironmentVariable('NODE_ENV'),
  jwtSecret: getEnvironmentVariable('JWT_SECRET'),
  githubId: getEnvironmentVariable('GITHUB_CLIENT_ID'),
  githubSecret: getEnvironmentVariable('GITHUB_CLIENT_SECRET'),
  googleId: getEnvironmentVariable('GOOGLE_CLIENT_ID'),
  googleSecret: getEnvironmentVariable('GOOGLE_CLIENT_SECRET'),
  secret: getEnvironmentVariable('AUTH_SECRET'),
};
