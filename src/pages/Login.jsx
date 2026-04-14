import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Leaf, Eye, EyeOff, Building, MapPin, Heart } from "lucide-react";
import Button from "../components/ui/Button";

export default function Login() {
  const [activeTab, setActiveTab] = useState("signin"); // "signin" | "register"
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState(""); // "admin" | "field_worker" | "volunteer"

  const { login, googleLogin, register } = useAuth();
  const navigate = useNavigate();

  const handleFirebaseError = (err) => {
    switch (err.code) {
      case "auth/user-not-found":
        return "No account found with this email";
      case "auth/wrong-password":
        return "Incorrect password";
      case "auth/email-already-in-use":
        return "Email already registered";
      case "auth/weak-password":
        return "Password must be at least 6 characters";
      case "auth/invalid-email":
        return "Please enter a valid email";
      case "auth/invalid-credential":
        return "Invalid credentials provided";
      default:
        return err.message;
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(handleFirebaseError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }
    if (!role) {
      return setError("Please select a role");
    }
    setLoading(true);
    try {
      await register(email, password, name, role);
      navigate("/dashboard");
    } catch (err) {
      setError(handleFirebaseError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    if (activeTab === "register" && !role) {
      return setError("Please select a role first for Google registration");
    }
    setLoading(true);
    try {
      await googleLogin(activeTab === "register" ? role : null);
      navigate("/dashboard");
    } catch (err) {
      setError(handleFirebaseError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
            <Leaf className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-green-600 font-display">CivicPulse</h1>
          <p className="text-gray-500 text-sm mt-1">Feel the pulse of your community</p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm text-center font-medium">
            {error}
          </div>
        )}

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6 relative">
          <button
            className={`flex-1 pb-3 text-sm font-medium transition-colors ${
              activeTab === "signin" ? "text-green-600" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => { setActiveTab("signin"); setError(""); }}
          >
            Sign In
          </button>
          <button
            className={`flex-1 pb-3 text-sm font-medium transition-colors ${
              activeTab === "register" ? "text-green-600" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => { setActiveTab("register"); setError(""); }}
          >
            Create Account
          </button>
          <div 
            className="absolute bottom-0 left-0 h-0.5 bg-green-600 transition-transform duration-300 ease-out"
            style={{ width: "50%", transform: `translateX(${activeTab === "signin" ? "0%" : "100%"})` }}
          />
        </div>

        {/* Forms */}
        {activeTab === "signin" ? (
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 mt-2"
              loading={loading}
            >
              Sign In
            </Button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Role Selection */}
            <div className="pt-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">I am a...</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setRole("admin")}
                  className={`flex-1 flex flex-col items-center p-3 rounded-xl border-2 transition-all ${
                    role === "admin" ? "border-green-600 bg-green-50" : "border-gray-200 hover:border-green-200 hover:bg-gray-50"
                  }`}
                >
                  <Building className={`w-5 h-5 mb-1 ${role === "admin" ? "text-green-600" : "text-gray-400"}`} />
                  <span className={`text-xs font-semibold ${role === "admin" ? "text-green-700" : "text-gray-600"}`}>NGO Admin</span>
                  <span className="text-[10px] text-gray-400 text-center mt-1 leading-tight">Manage needs, volunteers and assignments</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole("field_worker")}
                  className={`flex-1 flex flex-col items-center p-3 rounded-xl border-2 transition-all ${
                    role === "field_worker" ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-200 hover:bg-gray-50"
                  }`}
                >
                  <MapPin className={`w-5 h-5 mb-1 ${role === "field_worker" ? "text-blue-600" : "text-gray-400"}`} />
                  <span className={`text-xs font-semibold ${role === "field_worker" ? "text-blue-700" : "text-gray-600"}`}>Field Worker</span>
                  <span className="text-[10px] text-gray-400 text-center mt-1 leading-tight">Report community needs from the ground</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole("volunteer")}
                  className={`flex-1 flex flex-col items-center p-3 rounded-xl border-2 transition-all ${
                    role === "volunteer" ? "border-purple-600 bg-purple-50" : "border-gray-200 hover:border-purple-200 hover:bg-gray-50"
                  }`}
                >
                  <Heart className={`w-5 h-5 mb-1 ${role === "volunteer" ? "text-purple-600" : "text-gray-400"}`} />
                  <span className={`text-xs font-semibold ${role === "volunteer" ? "text-purple-700" : "text-gray-600"}`}>Volunteer</span>
                  <span className="text-[10px] text-gray-400 text-center mt-1 leading-tight">Help where you are needed most</span>
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 mt-4"
              loading={loading}
            >
              Create Account
            </Button>
          </form>
        )}

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or continue with</span>
            </div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="mt-6 w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>
        </div>

      </div>
    </div>
  );
}
