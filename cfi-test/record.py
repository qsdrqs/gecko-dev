#!/usr/bin/env python3
# -*- coding: utf-8 -*-
'''
Copyright (C) 2022

Author: qsdrqs <qsdrqs@gmail.com>
All Right Reserved

This file benchmark record time file

'''

import time
import os

def run_benchmark(path, name):
    start = time.time()
    os.system("./js " + path)
    end = time.time()
    print(name + ": ", str(end - start) + " seconds")

def run_benchmark_cd(cd, filename, name):
    start = time.time()
    os.system("cd " + cd + "; /home/qsdrqs/gecko-dev/cfi-test/js " + filename)
    end = time.time()
    print(name + ": ", str(end - start) + " seconds")

if __name__ == '__main__':
    run_benchmark("1.js", "200000 prime")
    run_benchmark("perf-automation/benchmarks/web-tooling-benchmark/cli.js", "web tooling")
    run_benchmark("perf-automation/benchmarks/octane/run.js", "octane")
    run_benchmark("perf-automation/benchmarks/matrix-react-bench/dist/main.js", "matrix react")
    run_benchmark_cd("perf-automation/benchmarks/JetStream2/WSL", "All.js", "WSL")
    run_benchmark_cd("perf-automation/benchmarks/JetStream2/ARES-6/Air/", "all.js", "ARES-6 Air")
    run_benchmark_cd("perf-automation/benchmarks/JetStream2/SeaMonster", "inspector-json-payload.js", "inspector-json-payload.js")




