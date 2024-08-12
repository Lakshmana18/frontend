import './App.css';
import HomePage from './components/addmeal/MealPlanningApp.js.js';
import CalorieCalculator from './components/calculate/CalorieCalculator.js';
import HydrationCalculator from './components/calculate/HydrationCalculator.js';
import MacronutrientCalculator from './components/calculate/MacronutrientCalculator.js';
import { ForgotPassword } from './components/forgotpassword/forgotpassword';
import NutritionInfoPage from './components/nutrition/NutritionInfoPage.js';
import { Profile } from './components/profile/Profile.js';
import { SignIn } from './components/signin/signin';
import SignOutForm from './components/signout/signout.js';
import { SignUp } from './components/signup/signup';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signout' element={<SignOutForm />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/calci1' element={<CalorieCalculator/>} />
          <Route path='/calci2' element={<MacronutrientCalculator/>} />
          <Route path='/calci3' element={<HydrationCalculator/>} />
          <Route path='/nutrion' element={<NutritionInfoPage/>} />
          <Route path='/prof' element={<Profile/>} />
          <Route path='/addmeal' element={<HomePage/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
