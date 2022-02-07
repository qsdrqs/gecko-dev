export MOZCONFIG=$(CURDIR)/mozconfig
MOZ_OBJDIR=$(CURDIR)/obj-cfi
JS_DIR = $(MOZ_OBJDIR)/js/src
JS = $(JS_DIR)/js
JS_FLAG = --ion-eager

build:
	cd .. && ./mach build

%.run: %.js
	$(JS) $(JS_FLAG) $<
