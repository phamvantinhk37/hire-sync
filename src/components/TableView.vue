<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { UserService } from '@/services/UserService';
import { CommonService } from '@/services/CommonService';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
import {
  DataTable,
  Column,
  InputText,
  IconField,
  InputIcon,
  Button,
  Avatar,
  type DataTableFilterEvent
} from "primevue";
import noData from "@/assets/noData.svg";

interface user {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string,
      "lng": string
    }
  },
  fullAddress: string,
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
}
const users = ref([]);
const filters = ref();
const filterData = ref();
const loading = ref(true);

onMounted(() => {
  UserService.getAllUsers()
    .then((response) => {
      users.value = response.data;
      users.value.map((user: user) => {
        user.fullAddress = `${user.address.street}, ${user.address.suite}, ${user.address.city}`;
        return user
      })
  }).catch(error => {
    console.error(error);
  }).finally(() => {
    loading.value = false;
  });
});
const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
    username: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
    email: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS}] },
    fullAddress: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
    'address.zipcode': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
    phone: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
    website: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
    'company.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
  };
};

initFilters();

const clearFilter = () => {
  initFilters();
};
const getFilterData = (event: DataTableFilterEvent) => {
  filterData.value = event['filteredValue'];
}
</script>

<template>
  <div class="table-container">
    <div v-if="loading"
         class="position-absolute d-flex flex-row justify-content-center w-100 h-100 loading">
      <div class="d-flex flex-column justify-content-center">
        <div class="d-flex flex-row justify-content-center">
          <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
        </div>
        <p class="">Loading...</p>
      </div>
    </div>
    <DataTable v-model:filters="filters"
               :value="users" showGridlines
               dataKey="id"
               filterDisplay="menu"
               scrollable
               removableSort
               paginator :rows="5"
               :rowsPerPageOptions="[5, 10, 20, 50]"
               :alwaysShowPaginator="false"
               @filter="getFilterData"
               @search="getFilterData"
               paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
               currentPageReportTemplate="{first} to {last} of {totalRecords}"
               :globalFilterFields="['name', 'username', 'email', 'address', 'website', 'phone', 'company.name']">
      <template #header>
        <div class="row gap-2">
          <div class="col">
            <Button class="float-start"
                    icon="pi pi-filter-slash"
                    label="Clear" outlined @click="clearFilter()" />
          </div>
          <div class="col">
            <IconField class="float-end search-field">
              <InputIcon>
                <i class="pi pi-search" />
              </InputIcon>
              <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
            </IconField>
          </div>
        </div>
      </template>
      <Column field="username" sortable header="Username" frozen alignFrozen="left">
        <template #body="{ data }">
          <div class="d-flex justify-content-start gap-2">
            <Avatar :label="CommonService.getAvatarCharacter(data.username)"
                    id="avatar"
                    class="d-flex justify-content-center flex-column"
                    shape="circle" />
            <span class="d-flex justify-content-center flex-column">{{ data.username }}</span>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by Username" />
        </template>
      </Column>
      <Column field="name" header="Name" sortable style="min-width: 170px">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by name" />
        </template>
      </Column>
      <Column field="email" sortable header="Email">
        <template #body="{ data }">
          <div class="d-flex justify-content-start flex-row gap-2">
            <i class="pi pi-envelope d-flex justify-content-center flex-column"></i>
            <span class="d-flex justify-content-center flex-column">{{ data.email }}</span>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by Email" />
        </template>
      </Column>
      <Column field="fullAddress" sortable header="Address" style="min-width: 300px">
        <template #body="{ data }">
          <div class="d-flex justify-content-start flex-row gap-2">
            <i class="pi pi-map-marker d-flex justify-content-center flex-column"></i>
            <span class="d-block text-truncate"
                  v-tooltip.bottom="{ value: data.fullAddress}"
                  style="width: 300px">{{ data.fullAddress }}</span>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by Address" />
        </template>
      </Column>
      <Column field="address.zipcode" sortable header="Zip Code" style="min-width: 170px">
        <template #body="{ data }">
          <div class="d-flex justify-content-start flex-row gap-2">
            <span class="d-flex justify-content-center flex-column">{{ data.address.zipcode }}</span>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by ZIP Code" />
        </template>
      </Column>
      <Column field="phone" sortable header="Phone Number" style="min-width: 220px">
        <template #body="{ data }">
          <div class="d-flex justify-content-start flex-row gap-2">
            <i class="pi pi-phone d-flex justify-content-center flex-column"></i>
            <span class="d-flex justify-content-center flex-column">{{ data.phone }}</span>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by Phone Number" />
        </template>
      </Column>
      <Column field="website" sortable header="Website">
        <template #body="{ data }">
          <div class="d-flex justify-content-start flex-row gap-2">
            <i class="pi pi-globe d-flex justify-content-center flex-column"></i>
            <span class="d-flex justify-content-center flex-column">{{ data.website }}</span>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by Website" />
        </template>
      </Column>
      <Column field="company.name" sortable header="Company Name" style="min-width: 220px">
        <template #body="{ data }">
          <div class="d-flex justify-content-start flex-row gap-2">
            <i class="pi pi-building d-flex justify-content-center flex-column"></i>
            <span class="d-flex justify-content-center flex-column">{{ data.company.name }}</span>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by Company Name" />
        </template>
      </Column>
    </DataTable>
    <div class="no-record" v-if="(users && users.length === 0) ||
  (filterData && filterData.length === 0)">
      <img :src="noData" height="150px" width="auto">
      <p class="fw-bold">No Records Found</p>
    </div>
  </div>
</template>

<style>
  .table-container {
    position: relative;
  }
  .table-container .p-datatable-header {
    border: none;
    padding-right: 0;
    padding-left: 0;
    padding-top: 0;
  }
  .table-container .p-datatable-paginator-bottom {
    border: none;
  }
  .table-container .p-datatable-column-header-content span:nth-child(2) {
    display: flex !important;
  }
  .table-container .p-paginator {
    justify-content: end;
    padding-right: 0;
    padding-left: 0;
    padding-bottom: 0;
  }
  .table-container td {
    padding: 6px 12px !important;
  }
  .table-container th {
    padding: 0 12px
  }
  .table-container button {
    padding: 6px;
  }
  .table-container input {
    padding-top: 6px;
    padding-bottom: 6px;
  }
  .no-record {
    height: 200px;
    width: 100%;
    text-align: center;
    border-bottom: solid 1px #e2e8f0;
    border-left: solid 1px #e2e8f0;
    border-right: solid 1px #e2e8f0;
  }
  .table-container .p-datatable-empty-message {
    display: none;
  }
  .table-container .loading {
    z-index: 2;
    background: rgba(0, 0, 0, 0.4);
    color: #e2e8f0;
    position: fixed;
    top: -19px;
    left: -19px;
    right: -19px;
    bottom: -19px;
    width: calc(100% + 38px) !important;
    height: calc(100% + 38px) !important;
    border-radius: 6px;
  }
  .table-container .p-select-label {
    padding: 6px;
  }
  @media only screen and (max-width: 576px) {
    .table-container .p-paginator {
      justify-content: center;
    }
    .table-container .p-paginator-content {
      border: solid 1px #e2e8f0;
      border-radius: 1rem;
      justify-content: space-between;
      width: 100%;
    }
    .table-container .p-paginator-content .p-select {
      display: none;
    }
    .table-container .p-paginator-first {
      display: none;
    }
    .table-container .p-paginator-last {
      display: none;
    }
    .table-container .p-paginator-next {
      font-size: 16px;
    }
    .table-container .search-field {
      width: 100%;
    }
    .table-container .search-field {
      width: 100%;
    }
  }

</style>
