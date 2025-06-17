<template>
  <MegaMenu ref="sidebarElement" class="mega-menu-container"
            :class="{'collapse-sidebar': !isExpand}"
            :breakpoint="'0'"
            :model="items" orientation="vertical">
    <template #start>
      <div class="d-flex flex-row" :class="{'mb-2': !isExpand}">
        <img :src="logo" height="50px" width="auto">
        <p v-if="isExpand"
           class="d-flex flex-column justify-content-center fw-bolder m-0">HIRE SYNC</p>
      </div>
      <Button v-if="isExpand" icon="pi pi-angle-double-left"
              @click="toggle" severity="secondary"
              v-tooltip="{ value: 'Click to collapse sidebar' }"
              />
      <Button v-if="!isExpand" icon="pi pi-angle-double-right"
              @click="toggle" severity="secondary"
              v-tooltip="{ value: 'Click to expand sidebar' }"/>
    </template>
    <template #item="{ item }">
      <router-link
        :to="item.to"
        v-tooltip="{ value: item.label, disabled: isExpand }"
        :class="{ 'active': isActive(item) }">
        <div class="d-flex flex-column justify-content-center icon-container"
             :class="{'me-2' : isExpand}">
          <i :class="item.icon"></i>
        </div>
        <span class="d-flex flex-column justify-content-center" v-if="isExpand">
          {{item.label}}
        </span>
      </router-link>
    </template>

    <template #end>
      <Panel class="w-100 border-0">
        <template #header>
          <div class="d-flex">
            <div class="d-flex justify-content-center flex-column"
                 :class="{'me-2' : isExpand}">
              <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            </div>
            <div class="d-flex flex-column" v-if="isExpand">
              <span class="fw-bold">Amy Elsner</span>
              <small class="text-muted">America@gmail.com</small>
            </div>
          </div>
        </template>
      </Panel>
    </template>
  </MegaMenu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useElementSize } from '@vueuse/core';
import {Avatar, MegaMenu, Button, Panel} from "primevue";
import {useRoute} from "vue-router";
import logo from "../assets/logo.svg"

const items = ref( [
  {
    label: "Overview Dashboard",
    to: "/",
    icon: "pi pi-home",
  },
  {
    label: "Users",
    to: "/user-listing",
    icon: "pi pi-users",
  },
  {
    label: "Job Listings",
    to: "/job-listing",
    icon: "pi pi-briefcase",
  },
  {
    label: "Companies",
    to: "/company-listing",
    icon: "pi pi-building-columns",
  },
  {
    label: "Feedback / Reviews",
    to: "/feedback",
    icon: "pi pi-book",
  },
  {
    label: "Job Applications",
    to: "/job-application",
    icon: "pi pi-file-pdf",
  },
  {
    label: "Role & Permissions",
    to: "/role-permission",
    icon: "pi pi-key",
  },
  {
    label: "Settings",
    to: "/setting",
    icon: "pi pi-cog",
  },
]);
const isExpand = ref(true);
const sidebarElement = ref(null);
const { width } = useElementSize(sidebarElement);
const router = useRoute();
const isActive = (item) => {
  // Example: Check if the item's 'to' matches the current route
  return router.path === item.to;
};
const toggle = () => {
  return isExpand.value = !isExpand.value;
}
</script>

<style>
.mega-menu-container {
  flex: 0 0 300px;
  height: 100%;
  position: fixed;
  display: flex;
  padding: 1rem !important;
  row-gap: 2rem !important;
  border-radius: 12px !important;
  -moz-box-shadow:    -3px 0 5px 0 #555;
  -webkit-box-shadow: -3px 0 5px 0 #555;
  box-shadow:         -3px 0 5px 0 #555;
}
.collapse-sidebar {
  flex: 0 0 80px;
  min-width: 80px !important;
}
.mega-menu-container .p-megamenu-start {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.collapse-sidebar .p-megamenu-start {
  flex-direction: column;
}
.mega-menu-container .p-megamenu-end {
  position: absolute;
  bottom: 0;
}
.mega-menu-container .p-panel-header {
  padding-left: 0;
  padding-right: 0;
}
.mega-menu-container .p-megamenu-root-list {
  display: flex;
  flex-direction: column;
  max-height: none !important;
}
.mega-menu-container .p-megamenu-item-content a {
  display: flex;
  flex-direction: row;
  padding: 12px;
  text-decoration: none;
  color: #515151;
  border-radius: 12px;
  font-weight: 500;
}
.collapse-sidebar a {
  justify-content: center !important;
}
.mega-menu-container .p-panel-content {
  display: none;
  padding: 6px;
}
.mega-menu-container .p-megamenu-item-content a:hover {
  color: #000;
  font-weight: bold;
  border-radius: 12px;
}
.mega-menu-container .p-megamenu-item-content:hover {
  border-radius: 12px !important;
}
.mega-menu-container .p-megamenu-item-content .active {
  background-color: #f1f5f9;
  color: #000;
  font-weight: bold;
  border-radius: 12px;
}
.mega-menu-container .p-megamenu-item-content .active i {
  color: #000;
  font-weight: bold;
}
</style>
