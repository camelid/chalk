initSidebarItems({"mod":[["binder_impls","This module contains impls of `Fold` for those types that introduce binders."],["boring_impls","This module contains \"rote and uninteresting\" impls of `Fold` for various types. In general, we prefer to derive `Fold`, but sometimes that doesn't work for whatever reason."],["shift","Shifting of debruijn indices"],["subst",""]],"struct":[["Subst","Substitution used during folding"]],"trait":[["Fold","Applies the given `Folder` to a value, producing a folded result of type `Self::Result`. The result is in the interner `TI`. The result type is typically the same as the source type (modulo interner), but in some cases we convert from borrowed to owned as well (e.g., the folder for `&T` will fold to a fresh `T`; well, actually `T::Result`)."],["Folder","A \"folder\" is a transformer that can be used to make a copy of some term -- that is, some bit of IR, such as a `Goal` -- with certain changes applied. The idea is that it contains methods that let you swap types/lifetimes for new types/lifetimes; meanwhile, each bit of IR implements the `Fold` trait which, given a `Folder`, will reconstruct itself, invoking the folder's methods to transform each of the types/lifetimes embedded within."],["SuperFold","For types where \"fold\" invokes a callback on the `Folder`, the `SuperFold` trait captures the recursive behavior that folds all the contents of the type."]]});