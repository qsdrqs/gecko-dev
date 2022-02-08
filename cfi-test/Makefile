export MOZCONFIG=$(CURDIR)/mozconfig
MOZ_OBJDIR=$(CURDIR)/obj-cfi
JS_DIR = $(MOZ_OBJDIR)/js/src
JS = $(JS_DIR)/js
# inline threshold?
# no-baseline ?
THRESHOLDS = --ion-warmup-threshold=6 --baseline-warmup-threshold=4 --blinterp-warmup-threshold=2
OPTIMIZATIONS = --ion-inlining=off 
JS_FLAG = $(THRESHOLDS) $(OPTIMIZATIONS) --ion-offthread-compile=off --ion-eager

export IONFLAGS=warp-transpiler,scripts#,dump-mir-expr

build:
	cd .. && ./mach build && cp $(JS) $(CURDIR)/

%.run: %.js
	$(JS) $(JS_FLAG) $<
