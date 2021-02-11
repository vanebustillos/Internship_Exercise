import { assert } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Repositories from "@/views/Repositories.vue";
import { mockUsers } from "./mockUsers";
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import getters from "@/store/getters";
/**
 * Import Vuex pluggins
 **/
import VueRouter from "vue-router";
import Vuex from "vuex";
import Vuetify from "vuetify";

describe("Repositories module", () => {
  let localVue;
  let router;
  let store;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    localVue.use(Vuetify);
    router = new VueRouter({ routes: [] });
    store = new Vuex.Store({
      state: mockUsers,
      actions,
      mutations,
      getters,
      modules: {}
    });
  });

  // Testing basic UI
  it("The title should be rendered", () => {
    const expectedTitle = "REPOSITORIES";
    const wrapper = shallowMount(Repositories, {
      store,
      localVue
    });

    const titleInComponent = wrapper.find("#repositoriesTitle");

    assert.equal(titleInComponent.text(), expectedTitle);
  });

  it("It should be 5 users.", () => {
    const expectedLenght = 5;
    const wrapper = shallowMount(Repositories, {
      store,
      localVue,
      router
    });

    const titleInComponent = wrapper.findAll(".userName");

    assert.isTrue(wrapper.exists());
    assert.equal(titleInComponent.length, expectedLenght);
  });

  // Testing Business Logic
  /*it("Logic for Repositories should works properly", () => {
    const wrapper = mount(Repositories, {
      router,
      store,
      localVue
    });
    let expectedInitialLength = 5;
    assert.isTrue(wrapper.exists());

    const [users] = wrapper.vm.$store.state.mockUsers;
    assert.equal(users.length, expectedInitialLength);
  });

  it("Register a new user works correctly.", () => {
    const wrapper = mount(Repositories, {
      store,
      localVue
    });
    const initialLength = wrapper.vm.$store.state.users.length;
    const expectedLength = initialLength + 1;

    wrapper.vm.$data.name = "Visual Studio Code";
    wrapper.vm.$data.nickName = "VSC";
    wrapper.vm.$data.avatar_url =
      "https://upload.wikimedia.org/Visual_Studio_Code_1.35_icon.svg.png";
    wrapper.vm.$data.github_url =
      "https://upload.wikimedia.org/Visual_Studio_Code_1.35_icon.svg.png";
    wrapper.vm._registerUser();

    const [users] = wrapper.vm.$store.state.mockUsers;
    assert.equal(users.length, expectedLength);
  });*/
});
