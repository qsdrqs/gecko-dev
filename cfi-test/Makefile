export MOZCONFIG=$(CURDIR)/mozconfig
MOZ_OBJDIR=$(CURDIR)/obj-cfi
JS_DIR = $(MOZ_OBJDIR)/js/src
JS = $(JS_DIR)/js
# inline threshold?
# no-baseline ?
THRESHOLDS = --ion-warmup-threshold=6 --baseline-warmup-threshold=4 --blinterp-warmup-threshold=2
OPTIMIZATIONS = --ion-inlining=off 
JS_FLAG = $(THRESHOLDS) $(OPTIMIZATIONS) --ion-offthread-compile=off

export IONFLAGS=bl-all#,codegen#warp-transpiler,scripts#,dump-mir-expr

build:
	cd .. &&  ./mach build && cp $(JS) $(CURDIR)/

build_4:
	cd .. && env MOZCONFIG=$(CURDIR)/mozconfig_4threads ./mach build && cp $(JS) $(CURDIR)/


clangd:
	cd .. && ./mach build-backend --backend=CompileDB && rm compile_commands.json && ln -s $(MOZ_OBJDIR)/compile_commands.json compile_commands.json

%.run: %.js
	$(JS) $(JS_FLAG) $<
