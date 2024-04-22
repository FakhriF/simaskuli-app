/*
'use client'

import { useState } from "react";
import { getToken } from "../actions";
import ThreadCreationForm from "./threadCreationForm";

export const metadata = {
    title: "Create Course",
};
*/
export default function CreateCoursePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <h1 className="text-2xl font-bold mb-4">Create a new course</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            autoComplete="off"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:ring-1 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows="3"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:ring-1 sm:text-sm"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">
            Cover Image
          </label>
          <input
            type="url"
            name="coverImage"
            id="coverImage"
            autoComplete="off"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:ring-1 sm:text-sm"
          />
        </div>
        {/* Disable interactivity for now */}
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-gray-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:border-gray-700 focus:ring focus:ring-gray-200 disabled:opacity-25 transition ease-in-out duration-150"
          disabled
        >
          Create Course
        </button>
      </form>
    </div>


  );
}


