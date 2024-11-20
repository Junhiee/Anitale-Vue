<template>
    <!-- Search -->
    <div class="join w-full max-w-xl hidden sm:inline-flex">
        <!-- Search options -->
        <select class="select select-sm select-bordered join-item">
            <option selected>Good potions</option>
            <option>Bad potions</option>
            <option>Illegal potions</option>
        </select>

        <!-- Search input -->
        <input class="join-item input input-sm input-bordered w-full" type="text" placeholder="Search">

        <!-- Search button -->
        <button class="join-item btn btn-sm btn-primary text-success-content">
            <i class="fa fa-search" aria-hidden="true"></i>
        </button>
    </div>
</template>