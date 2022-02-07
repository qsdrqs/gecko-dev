export MOZCONFIG=$(CURDIR)/mozconfig
MOZ_OBJDIR=$(CURDIR)/obj-cfi
JS_DIR = $(MOZ_OBJDIR)/js/src
JS = $(JS_DIR)/js
# inline threshold?
# no-baseline ?
JS_FLAG = --ion-warmup-threshold=6 --baseline-warmup-threshold=4 --blinterp-warmup-threshold=2 --ion-eager

build:
	cd .. && ./mach build

%.run: %.js
	$(JS) $(JS_FLAG) $<
