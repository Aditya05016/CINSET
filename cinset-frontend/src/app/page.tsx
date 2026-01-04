"use client";

export default function Page() {
  return (
    <div className="flex justify-between items-center h-screen px-6">
      <p>This is a navbar</p>

      <ul className="flex gap-4">
        <li>Profile</li>
        <li>Login</li>
        <li>Signup</li>
      </ul>
    </div>
  );
}


