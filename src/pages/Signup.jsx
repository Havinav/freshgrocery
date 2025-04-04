import React from 'react'
import { Link } from 'react-router-dom'
import PathUtils from './PathUtils'

const Signup = () => {
  return (
    <div className="bg-amber-100 rounded-lg shadow-lg mt-20">
    <div className="px-6">
      <div class="font-[sans-serif]">
        <div class=" flex fle-col items-center justify-center">
          <div class="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
            <div>
              <h2 class="lg:text-5xl text-4xl font-extrabold lg:leading-[55px] text-gray-800">
                Welcome FreshGrocery
              </h2>

              <p class="text-sm mt-12 text-gray-800">
                Don't have an account{" "}
                <span class="text-blue-600 font-semibold hover:underline ml-1">
                  <Link to={"/"+PathUtils.SIGNIN}>SignIn</Link>
                </span>
              </p>
            </div>

            <form class="max-w-md md:ml-auto w-full">
              <h3 class="text-gray-800 text-3xl font-extrabold mb-8">
                SignUp
              </h3>

              <div class="space-y-4">
              <span class="text-sm text-gray-800">First Name</span>
                <div>
                  <input
                    name=""
                    type="text"
                    required
                    class="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                    placeholder="john"
                  />
                </div>
                <span class="text-sm text-gray-800">Last Name</span>
                <div>
                  <input
                    name=""
                    type="text"
                    required
                    class="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                    placeholder="john"
                  />
                </div>
                <span class="text-sm text-gray-800">Mobile Number</span>
                <div>
                  <input
                    name=""
                    type="number"
                    required
                    class="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                    placeholder="john"
                  />
                </div>
                <span class="text-sm text-gray-800">Email</span>
                <div>
                  <input
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <span class="text-sm text-gray-800">Password</span>
                  <input
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                    placeholder="Password"
                  />
                </div>
               
              </div>

              <div class="!mt-8">
                <button
                  type="button"
                  class="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                 SignUp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
  )
}

export default Signup