#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.

import os
import platform
import re
import sys
import textwrap

import setuptools


if sys.version_info < (3, ):
    raise ImportError(textwrap.dedent("""\
        You are trying to install python-chess on Python 2.
        The last compatible branch was 0.23.x, which was supported until the
        end of 2018. Consider upgrading to Python 3.
        """))

if sys.version_info < (3, 7):
    raise ImportError("Since version 1.0.0, python-chess requires Python 3.7 or later.")

import chess





setuptools.setup(
    name="chess",
    version=chess.__version__,
    author=chess.__author__,
    author_email=chess.__email__,
    description=chess.__doc__.replace("\n", " ").strip(),
    long_description_content_type="text/x-rst",
    license="GPL-3.0+",
    keywords="chess fen epd pgn polyglot syzygy gaviota uci xboard",
    packages=["chess"],
    test_suite="test",
    zip_safe=False,  # For mypy
    package_data={
        "chess": ["py.typed"],
    },
    python_requires=">=3.7",
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Intended Audience :: Developers",
        "Intended Audience :: Science/Research",
        "License :: OSI Approved :: GNU General Public License v3 or later (GPLv3+)",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 3 :: Only",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Topic :: Games/Entertainment :: Board Games",
        "Topic :: Games/Entertainment :: Turn Based Strategy",
        "Topic :: Software Development :: Libraries :: Python Modules",
        "Typing :: Typed",
    ],
    project_urls={
        "Documentation": "https://python-chess.readthedocs.io",
    },
    obsoletes=["python_chess"],
)