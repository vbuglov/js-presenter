// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import {EditorView} from "codemirror";

interface Store {
  editors:  Record<string, EditorView>
}

const initStoreData: Store = {
  editors: {}
}

const initStore = (): Store => {
  document.appStore = initStoreData;
  return document.appStore
}

const useStore = (): Store => {
  if (!document.appStore) {
    document.appStore = initStoreData;
  }

  return document.appStore;
}

const recordStore = (store: keyof Store, value: any): Store  => {
  this.document.appStore[store] = value;
  return document.appStore;
}

export {initStore, useStore, recordStore}