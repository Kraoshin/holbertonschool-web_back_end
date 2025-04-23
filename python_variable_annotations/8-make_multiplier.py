#!/usr/bin/env python3
""" Module for element_length function """
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Return a function that multiplies a float by the given multiplier.

    Args:
    multiplier (float)

    Returns:
    Callable[[float], float]
    """
    def multiplier_function(value: float) -> float:
        return value * multiplier

    return multiplier_function
