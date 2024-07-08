<template>
      <table class="table table-hover">
            <thead>
                  <tr>
                        <th scope="col" width="5%">#</th>
                        <th scope="col" width="20%">Client</th>
                        <th scope="col" width="10%">Bread</th>
                        <th scope="col" width="10%">Meat</th>
                        <th scope="col" width="10%">Optionals</th>
                        <th scope="col" width="15%">Actions</th>
                  </tr>
            </thead>
            <tbody>
                  <tr v-for="burger in burgers" :key="burger.id">
                        <td>{{ burger.id }}</td>
                        <td>{{ burger.name }}</td>
                        <td>{{ burger.bread }}</td>
                        <td>{{ burger.meat }}</td>
                        <td>
                              <ul>
                                    <li v-for="(optional, index) in burger.optional" :key="index">{{ optional }}</li>
                              </ul>
                        </td>
                        <td>
                              <div class="row">
                                    <div class="col-8">
                                          <select class="form-select" @change="UpdateStatusBurger($event, burger.id)">
                                                <option v-for="s in status" :key="s.id" :value="s.type"
                                                      :selected="burger.status == s.type">{{ s.type }}</option>
                                          </select>
                                    </div>
                                    <div class="col-4">
                                          <button type="button" class="btn btn-danger"
                                                @click="deleteBurger(burger.id)">Cancel</button>
                                    </div>
                              </div>
                        </td>
                  </tr>
            </tbody>
      </table>
</template>